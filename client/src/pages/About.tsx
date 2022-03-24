import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";

const useStyles = makeStyles(() => ({
  root: {
    //maxWidth: 343,
    borderRadius: 20
  },
  content: {
    padding: 24
  }
}));

export const AboutCard = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <BrandCardHeader
        image={
          "https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
        }
      />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={styles}
          overline={"about stars wars characters project"}
          heading={"Using React, Typescript and GraphQL"}
          body={
            " The Star Wars API, or \"swapi\" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe! This project uses React, Typescript and Apollo GraphQL API and resolves all People (https://swapi.dev/api/people/), but only the Person's details (name, height, mass, gender, homeworld). The People Query caters for pagination, you will notice the next property in the response. When given a page number, the respective People page will be returned"
          }
        />
      </CardContent>
    </Card>
  );
});

export default AboutCard;
