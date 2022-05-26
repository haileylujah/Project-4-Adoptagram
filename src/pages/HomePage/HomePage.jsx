import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import { Grid, Image, Icon } from "semantic-ui-react";


export default function Homepage(props) {
    
      return (
        <Grid centered>
          <Grid.Row>
            <Grid.Column>
              <HomeHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row>
          <Image 
          size="small"
          src="https://labellefoundation.org/wp-content/uploads/2022/03/cropped-Labelle_Logo_Desing_Only.png" />
          </Grid.Row>

          <Grid.Row>
            <Grid.Column >
            <Image centered
            size="massive"
            src="https://universityofbarkley.com/wp-content/uploads/2020/07/adopt-shop-lettering-background_106024-75.jpg"></Image>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
              <Icon
              size="big"
              name="phone volume"></Icon>
              <Grid.Row><h2>Please Contact: 800-ADOPT-ME</h2></Grid.Row>
          </Grid.Row>
        </Grid>
      );
    }
    