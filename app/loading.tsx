import Image from "next/image";
import loader from '@/resources/resources/assets/loader.gif';

const LoadingPage = () => {
    return <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems:'center', 
        height:'100vh', 
        width: '100%'
        }}>
        <Image src={loader} height={150} width={150} alt="loading..."/>
    </div>;
}
 
export default LoadingPage;