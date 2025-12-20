use dioxus::prelude::*;
use web_component::prelude::*;

#[derive(Clone, PartialEq, Props, Default, Debug)]
pub struct BrandProperties {
    #[props(default = "Systems".to_string())]
    pub variant: String,
    #[props(default = true)]
    pub expanded: bool,
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
        let expanded = this.read().properties.expanded;
        let logo_source = asset!("/assets/logo.png");
        let theme = crate::theme::Theme::default();
        let class = if expanded {
            "brand-container expanded"
        } else {
            "brand-container collapsed"
        };

        rsx! {
            { theme.to_css_style() }
            style { { include_str!("style.css") } }
            div {
                class: class,
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
