import Text_rn from "../components/reuseable/text/text_rn";
import Header from "../layouts/header";

const Home = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} />
            <Text_rn preset="h1">Home a</Text_rn>
        </>
    );
};

export default Home;