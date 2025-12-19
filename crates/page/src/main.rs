#![allow(non_snake_case)]

use dioxus::prelude::*;

mod brand;
mod canvas;
mod landing_page;
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
        { style }
        Router::<Route> {}
    }
}

fn main() {
    launch(App);
}
