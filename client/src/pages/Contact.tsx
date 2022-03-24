import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
//import {
//  SocialProvider,
//  SocialLink
//} from "@mui-treasury/components/socialLink";
//import { useBallSocialLinkStyles } from "@mui-treasury/styles/socialLink/ball";*/

const useStyles = makeStyles(() => ({
  root: {
    //maxWidth: 343,
    borderRadius: 20
  },
  content: {
    padding: 24
  }
}));

export const Contact = React.memo(function ProjectCard() {
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
          overline={"stars wars people"}
          heading={"Contact"}
          body={
            "Check out my Github repository at https://github.com/gaolatheseelo"
          }
        />
        <Box />
        <Box>
          {/* <SocialProvider useStyles={useBallSocialLinkStyles} >
            <SocialLink 
            brand={"Envelope"} 
            //href="gaolathe.seelo@gmail.com" 
            />
            <SocialLink
             brand={"GooglePlus"} 
             //href="gaolathe.seelo@gmail.com"
              />
            <SocialLink
              brand={"Pinterest"}
              //href="https://www.pinterest.com/gseelo"
            />
            <SocialLink brand={"Dribbble"} />
            <SocialLink
              brand={"Twitter"}
              //href="https://www.twitter.com/gseelo"
            />
          </SocialProvider>*/}
        </Box>
      </CardContent>
    </Card>
  );
});

export default Contact;
