/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "@components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "@examples/Cards/RotatingCard";
import RotatingCardFront from "@examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "@examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "@examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "@assets/images/rotating-card-bg-front.jpeg";
import bgBack from "@assets/images/rotating-card-bg-back.jpeg";

function Information2() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={12} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={12} sx={{ ml: "auto" }}>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6} lg={4}>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    icon="touch_app"
                    title="Enoturismo"
                    description="Conoce más."
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title="Enoturismo"
                    description="Turismo por zonas de cultivo y producción de vino, con visitas a los viñedos y bodegas, y degustación de sus caldos.
."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/page-headers",
                      label: "start with header",
                    }}
                  />
                </RotatingCard>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    icon="touch_app"
                    title="Aprender de vino"
                    description="Conoce más."
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title="Aprender de vino"
                    description="El vino es una puerta a nuevas sensaciones. Cada botella refleja la tierra, el clima y el cuidado que le dieron a sus uvas, ofreciendo una diversidad de sabores y aromas para explorar. Conocer el mundo del vino es descubrir cómo cada variedad ya que estos, pueden enriquecer nuestros momentos y convertir una simple comida en una experiencia inolvidable."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/page-headers",
                      label: "start with header",
                    }}
                  />
                </RotatingCard>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    icon="touch_app"
                    title="Curiosidades"
                    description="Conoce más."
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title="Curiosidades"
                    description="El vino está lleno de secretos y curiosidades que sorprenderán a todos los que se adentrarán en su mundo."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/page-headers",
                      label: "start with header",
                    }}
                  />
                </RotatingCard>
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6} lg={4}>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    icon="touch_app"
                    title="Elaboración"
                    description="Conoce más."
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title="Elaboración"
                    description="La elaboración del vino es un arte que transforma el fruto de la vid en una bebida llena de vida y expresión."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/page-headers",
                      label: "start with header",
                    }}
                  />
                </RotatingCard>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    icon="touch_app"
                    title="Tipos de vinos"
                    description="Conoce más."
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title="Tipos de vinos"
                    description="El mundo del vino es tan diverso como las tierras donde nacen las vides. Cada tipo de vino ofrece una experiencia única que combina historia, sabor y tradición."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/page-headers",
                      label: "start with header",
                    }}
                  />
                </RotatingCard>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <RotatingCard>
                  <RotatingCardFront
                    image={bgFront}
                    icon="touch_app"
                    title="Vinos para regalar"
                    description="Conoce más."
                  />
                  <RotatingCardBack
                    image={bgBack}
                    title="Vinos para regalar"
                    description="Regalar un vino es mucho más que ofrecer una botella; es compartir un gesto de aprecio, elegancia y buen gusto."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/page-headers",
                      label: "start with header",
                    }}
                  />
                </RotatingCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information2;
