// Arquivo para sobrescrever o arquivo de estilos do app.
import "styled-components";

import theme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
