use dioxus::prelude::*;
use web_component::prelude::*;

#[derive(Clone, PartialEq, Props, Default, Debug)]
pub struct ProductProperties {
    #[props(default = "◉".to_string())]
    pub icon: String,
    #[props(default = "Product Title".to_string())]
    pub title: String,
    #[props(default = "Product description goes here.".to_string())]
    pub description: String,
}

pub struct ProductComponent {
    properties: ProductProperties,
}

impl FromProperties<ProductProperties> for ProductComponent {
    fn from_properties(properties: ProductProperties) -> Self {
        Self { properties }
    }
}

impl WebComponent for ProductComponent {
    type Properties = ProductProperties;

    fn render(this: Signal<Self>) -> Element {
        let props = this.read().properties.clone();

        rsx! {
            style { { include_str!("style.css") } }
            div { class: "product-card",
                div { class: "product-icon", "{props.icon}" }
                h3 { class: "product-title", "{props.title}" }
                p { class: "product-desc", "{props.description}" }
            }
        }
    }
}

expose_component!(ProductComponent as Product);
