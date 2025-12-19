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
        let logo_source = asset!("/assets/logo.png");

        use_effect(move || {
            let cat = this.read().active_category;
            web_sys::console::log_1(&format!("Active category changed: {:?}", cat).into());
        });

        let products = match active_category {
            ProductCategory::Systems => vec![
                ProductData {
                    icon: "◉".to_string(),
                    title: "Inference System".to_string(),
                    description: "Decentralized mesh for secure, low-latency AI model execution at the edge.".to_string(),
                },
                ProductData {
                    icon: "◈".to_string(),
                    title: "Neural Mesh".to_string(),
                    description: "Latency-optimized peer-to-peer intelligence routing for distributed agents.".to_string(),
                },
                ProductData {
                    icon: "▣".to_string(),
                    title: "Edge Sovereign".to_string(),
                    description: "Privacy-first infrastructure ensuring data sovereignty for local AI autonomy.".to_string(),
                },
            ],
            ProductCategory::Studio => vec![
                ProductData {
                    icon: "✎".to_string(),
                    title: "Flow Canvas".to_string(),
                    description: "Visual logic builder for complex multi-agent workflows and neural architectures.".to_string(),
                },
                ProductData {
                    icon: "⚡︎".to_string(),
                    title: "Synth Engine".to_string(),
                    description: "High-performance asset generation and real-time inference pipeline for creative tools.".to_string(),
                },
                ProductData {
                    icon: "⌘".to_string(),
                    title: "Control Center".to_string(),
                    description: "Unified dashboard for monitoring, deploying, and scaling agentic systems.".to_string(),
                },
            ],
            ProductCategory::Finance => vec![
                ProductData {
                    icon: "＄".to_string(),
                    title: "Oracle Node".to_string(),
                    description: "Verifiable data feeds for decentralized financial models and automated trading.".to_string(),
                },
                ProductData {
                    icon: "⚛".to_string(),
                    title: "Ledger Mesh".to_string(),
                    description: "High-throughput settlement layer for inter-agent value exchange and micro-payments.".to_string(),
                },
                ProductData {
                    icon: "⚖".to_string(),
                    title: "Risk Engine".to_string(),
                    description: "Real-time risk assessment and automated compliance for algorithmic finance.".to_string(),
                },
            ],
        };

        rsx! {
            style { { include_str!("style.css") } }
            div { class: "container",
                // Header
                nav { class: "navbar",
                    div { class: "nav-left",
                        img { class: "logo", src: "{logo_source}", alt: "Sensorial Logo" }
                    }
                    div { class: "nav-right",
                        button {
                            class: if active_category == ProductCategory::Systems { "nav-button active" } else { "nav-button" },
                            onclick: move |_| {
                                this.write().active_category = ProductCategory::Systems;
                            },
                            "Systems"
                        }
                        button {
                            class: if active_category == ProductCategory::Studio { "nav-button active" } else { "nav-button" },
                            onclick: move |_| {
                                this.write().active_category = ProductCategory::Studio;
                            },
                            "Studio"
                        }
                        button {
                            class: if active_category == ProductCategory::Finance { "nav-button active" } else { "nav-button" },
                            onclick: move |_| {
                                this.write().active_category = ProductCategory::Finance;
                            },
                            "Finance"
                        }
                    }
                }

                // Main Canvas Area
                main { class: "canvas-area",
                    WgpuCanvas {}
                    div { class: "canvas-overlay",
                        div { class: "product-grid",
                            for product in products {
                                Product {
                                    key: "{product.title}",
                                    icon: product.icon,
                                    title: product.title,
                                    description: product.description
                                }
                            }
                        }
                    }
                }

                // Footer
                footer { class: "footer",
                    Brand { variant: "{active_category}" }
                    div { class: "footer-info", "© 2025 ALL RIGHTS RESERVED" }
                }
            }
        }
    }
}

expose_component!(LandingPageComponent as LandingPage);
