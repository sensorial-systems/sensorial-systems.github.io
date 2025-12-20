use crate::brand::Brand;
use crate::canvas::WgpuCanvas;
use crate::product::Product;
use dioxus::prelude::*;
use web_component::prelude::*;

#[derive(Clone, Copy, PartialEq, Debug)]
enum ProductCategory {
    Systems,
    Studio,
    Finance,
}

impl std::fmt::Display for ProductCategory {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            ProductCategory::Systems => write!(f, "Systems"),
            ProductCategory::Studio => write!(f, "Studio"),
            ProductCategory::Finance => write!(f, "Finance"),
        }
    }
}

struct ProductData {
    icon: String,
    title: String,
    description: String,
}

pub struct LandingPageComponent {
    active_category: ProductCategory,
}

impl FromProperties<NoProperties> for LandingPageComponent {
    fn from_properties(_: NoProperties) -> Self {
        Self {
            active_category: ProductCategory::Systems,
        }
    }
}

impl WebComponent for LandingPageComponent {
    type Properties = NoProperties;

    fn render(mut this: Signal<Self>) -> Element {
        let active_category = this.read().active_category;

        // Track the category currently being displayed (delayed update)
        let mut display_category = use_signal(|| active_category);
        // Track opacity for fade effect
        let mut opacity = use_signal(|| 1.0f32);

        let theme = crate::theme::Theme::default();

        let handle_category_change = move |new_category: ProductCategory| {
            if this.read().active_category != new_category {
                spawn(async move {
                    // Update main active category immediately for UI (e.g. nav highlight)
                    this.write().active_category = new_category;

                    // Start fade out
                    opacity.set(0.0);

                    // Wait for fade out
                    gloo_timers::future::TimeoutFuture::new(300).await;

                    // Change displayed content
                    display_category.set(new_category);

                    // Fade back in
                    opacity.set(1.0);
                });
            }
        };

        use_effect(move || {
            let cat = this.read().active_category;
            web_sys::console::log_1(&format!("Active category changed: {:?}", cat).into());
        });

        let products = match *display_category.read() {
            ProductCategory::Systems => vec![
                ProductData {
                    icon: "◉".to_string(),
                    title: "Sensorial Compute Network".to_string(),
                    description: "A distributed inference network that coordinates AI workloads across independent providers. It enables scalable, cost-efficient execution by matching requests to available compute and returning results asynchronously.".to_string(),
                },
            ],
            ProductCategory::Studio => vec![
                ProductData {
                    icon: "✎".to_string(),
                    title: "Sensorial Prism".to_string(),
                    description: "An interactive shader development environment focused on real-time experimentation. It enables visual and code-based authoring of shaders with live previews and reusable compositions.".to_string(),
                },
            ],
            ProductCategory::Finance => vec![
                ProductData {
                    icon: "＄".to_string(),
                    title: "Sensorial Pay".to_string(),
                    description: "A payment and accounting system designed for high-frequency, low-value transactions. It supports usage-based billing, credit balances, and efficient settlement between users and service providers.".to_string(),
                },
                ProductData {
                    icon: "▣".to_string(),
                    title: "Sensorial Funding".to_string(),
                    description: "A public funding system that enables transparent, community-driven financing of projects and initiatives. It provides structured allocation, contribution tracking, and accountable distribution of funds.".to_string(),
                },
            ],
        };

        rsx! {
            { theme.to_css_style() }
            style { { include_str!("style.css") } }
            div { class: "container",
                // Header
                nav { class: "navbar",
                    div { class: "nav-right",
                        div {
                            class: "nav-item",
                            onclick: move |_| handle_category_change(ProductCategory::Systems),
                                Brand {
                                    variant: "Systems",
                                    expanded: active_category == ProductCategory::Systems
                                }
                        }
                        div {
                            class: "nav-item",
                            onclick: move |_| handle_category_change(ProductCategory::Studio),
                                Brand {
                                    variant: "Studio",
                                    expanded: active_category == ProductCategory::Studio
                                }
                        }
                        div {
                            class: "nav-item",
                            onclick: move |_| handle_category_change(ProductCategory::Finance),
                                Brand {
                                    variant: "Finance",
                                    expanded: active_category == ProductCategory::Finance
                                }
                        }
                    }
                }

                // Main Canvas Area
                main { class: "canvas-area",
                    WgpuCanvas {}
                    div { class: "canvas-overlay",
                        div {
                            class: "product-grid",
                            for product in products {
                                Product {
                                    key: "{product.title}",
                                    icon: product.icon,
                                    title: product.title,
                                    description: product.description,
                                    opacity: opacity()
                                }
                            }
                        }
                    }
                }

                // Footer
                footer { class: "footer",
                    Brand { variant: "{display_category}" }
                    div { class: "footer-info", "© 2025 ALL RIGHTS RESERVED" }
                }
            }
        }
    }
}

expose_component!(LandingPageComponent as LandingPage);
