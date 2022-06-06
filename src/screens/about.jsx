import Text_rn from "../components/reuseable/text/text_rn";
import Header from "../layouts/header";

const About = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} />
            <Text_rn preset="h1">About</Text_rn>
        </>
    );
};

export default About;