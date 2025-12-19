use dioxus::prelude::*;
use web_component::prelude::*;

#[derive(Clone, PartialEq, Props, Default, Debug)]
pub struct BrandProperties {
    #[props(default = "Systems".to_string())]
    pub variant: String,
}

pub struct BrandComponent {
    properties: BrandProperties,
}

impl FromProperties<BrandProperties> for BrandComponent {
    fn from_properties(properties: BrandProperties) -> Self {
        Self { properties }
    }
}

impl WebComponent for BrandComponent {
    type Properties = BrandProperties;

    fn render(this: Signal<Self>) -> Element {
        let variant = this.read().properties.variant.clone();
        let logo_source = asset!("/assets/logo.png");

        rsx! {
            style { { include_str!("style.css") } }
            div { class: "brand-container",
                img {
                    class: "brand-logo",
                    src: "{logo_source}",
                    alt: "Sensorial Logo"
                }
                div { class: "brand-text",
                    span { class: "brand-top", "Sensorial" }
                    span { class: "brand-bottom", "{variant}" }
                }
            }
        }
    }
}

expose_component!(BrandComponent as Brand);
