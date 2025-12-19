use dioxus::prelude::*;
use web_component::prelude::*;

pub struct Theme {
    pub primary_color: (f32, f32, f32),
    pub secondary_color: (f32, f32, f32),
}

impl Default for Theme {
    fn default() -> Self {
        Self {
            primary_color: (219.0, 225.0, 31.0),
            secondary_color: (0.0, 0.0, 0.0),
        }
    }
}

impl Theme {
    pub fn to_css_style(&self) -> Element {
        let primary_color = format!(
            "{},{},{}",
            self.primary_color.0, self.primary_color.1, self.primary_color.2
        );
        let secondary_color = format!(
            "rgb({},{},{})",
            self.secondary_color.0, self.secondary_color.1, self.secondary_color.2
        );

        let css = format!(
            "
            :root {{
                --primary-color: {primary_color};
                --secondary-color: {secondary_color};
            }}
            "
        );

        rsx! {
            style { {css} }
        }
    }
}
