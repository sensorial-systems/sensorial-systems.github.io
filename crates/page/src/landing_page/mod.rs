use web_component::prelude::*;

#[derive(Default)]
pub struct LandingPageComponent {}

impl WebComponent for LandingPageComponent {
    type Properties = NoProperties;

    fn render(_component: Signal<Self>) -> Element {
        rsx! {
            style { { include_str!("style.css") } }
            div { class: "container",
                // Navbar
                nav { class: "navbar",
                    div { class: "brand", "Sensorial Systems" }
                    // Simple text link or button for nav could go here
                }

                // Hero
                header { class: "hero",
                    h1 {
                        "Intelligence,"
                        br {}
                        "Distributed."
                    }
                    p {
                        "Secure, scalable, and decentralized AI inference for the next generation of privacy-preserving applications."
                    }
                    a { class: "cta-button", href: "#products", "Explore Technology" }
                }

                // Pixelated Divider
                div { class: "pixel-divider" }

                // Products
                section { id: "products", class: "products",
                    h2 { class: "section-title", "Ecosystem" }
                    div { class: "grid",
                        div { class: "product-card",
                            div { class: "product-icon", "◉" }
                            h3 { class: "product-title", "Inference System" }
                            p { class: "product-desc",
                                "Run complex AI models across a decentralized mesh of devices. Zero-trust architecture with homomorphic encryption support."
                            }
                        }
                    }
                }
            }

            footer {
                "© 2025 Sensorial Systems. All rights reserved."
            }
        }
    }
}

expose_component!(LandingPageComponent as LandingPage);
