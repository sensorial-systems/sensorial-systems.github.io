use crate::brand::Brand;
use crate::canvas::WgpuCanvas;
use dioxus::prelude::*;
use web_component::prelude::*;

pub struct LandingPageComponent {}

impl FromProperties<NoProperties> for LandingPageComponent {
    fn from_properties(_: NoProperties) -> Self {
        Self {}
    }
}

impl WebComponent for LandingPageComponent {
    type Properties = NoProperties;

    fn render(_: Signal<Self>) -> Element {
        let logo_source = asset!("/assets/logo.png");
        rsx! {
            style { { include_str!("style.css") } }
            div { class: "container",
                // Header
                nav { class: "navbar",
                    div { class: "nav-left",
                        img { class: "logo", src: "{logo_source}", alt: "Sensorial Logo" }
                    }
                    div { class: "nav-right",
                        button { class: "nav-button", "Systems" }
                        button { class: "nav-button", "Studio" }
                        button { class: "nav-button", "Finance" }
                    }
                }

                // Main Canvas Area
                main { class: "canvas-area",
                    WgpuCanvas {}
                    div { class: "canvas-overlay",
                        div { class: "product-grid",
                            div { class: "product-card",
                                div { class: "product-icon", "◉" }
                                h3 { class: "product-title", "Inference System" }
                                p { class: "product-desc", "Decentralized mesh for secure, low-latency AI model execution at the edge." }
                            }
                            div { class: "product-card",
                                div { class: "product-icon", "◈" }
                                h3 { class: "product-title", "Neural Mesh" }
                                p { class: "product-desc", "Latency-optimized peer-to-peer intelligence routing for distributed agents." }
                            }
                            div { class: "product-card",
                                div { class: "product-icon", "▣" }
                                h3 { class: "product-title", "Edge Sovereign" }
                                p { class: "product-desc", "Privacy-first infrastructure ensuring data sovereignty for local AI autonomy." }
                            }
                        }
                    }
                }

                // Footer
                footer { class: "footer",
                    Brand { variant: "Systems" }
                    div { class: "footer-info", "© 2025 ALL RIGHTS RESERVED" }
                }
            }
        }
    }
}

expose_component!(LandingPageComponent as LandingPage);
