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
        // Generated with https://realfavicongenerator.net/
        document::Link { rel: "icon", r#type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" }
        document::Link { rel: "icon", r#type: "image/svg+xml", href: "/favicon/favicon.svg" }
        document::Link { rel: "shortcut icon", href: "/favicon/favicon.ico" }
        document::Link { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" }
        document::Meta { name: "apple-mobile-web-app-title", content: "Sensorial" }
        document::Link { rel: "manifest", href: "/favicon/site.webmanifest" }

        document::Meta { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }
        { style }
        Router::<Route> {}
    }
}

fn main() {
    launch(App);
}
