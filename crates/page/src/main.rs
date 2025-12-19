#![allow(non_snake_case)]

use dioxus::prelude::*;

mod brand;
mod canvas;
mod landing_page;
mod product;
mod theme;

use landing_page::LandingPage;
use theme::Theme;

#[derive(Clone, Routable, Debug, PartialEq)]
enum Route {
    #[route("/")]
    LandingPage {},
}

fn App() -> Element {
    let theme = Theme::default();
    let style = theme.to_css_style();
    rsx! {
        document::Title { "Sensorial Systems" }
        document::Meta { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }
        { style }
        Router::<Route> {}
    }
}

fn main() {
    launch(App);
}
