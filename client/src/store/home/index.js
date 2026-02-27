import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs, query, limit, orderBy } from "firebase/firestore";
import { db } from "../../firebase.config";
import { toast } from "react-toastify";
import FooterNav from "../components/footer";
import HeaderNav from "../components/header"; 
import SubscribeForm from "../components/subscribe";
import HomeCategories from "./categories";
import HomeHero from "./hero";
import './home.css';
import HomeProducts from "./products";
import PageLoading from "../components/loading";
import MostViewed from "./viewed";
import HomeBanner from "./banner";

const Store = () => {

    const isMounted = useRef()
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false); // New state for tracking all data loaded




    //Fetch Product
    const fetchProducts = async () => {

        try {
            const prodRef = collection(db, 'products')
            const q = query(prodRef, limit(8))
            const querySnap = await getDocs(q)
            let products = []
            querySnap.forEach((doc) => {
                return products.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })
            setProducts(products)

        } catch (error) {
            console.log({ error })
            toast.error("Unable to retrieve products")
        }
        setIsDataLoaded(true);
    }


    //Fetch Categories
    const fetchCategories = async () => {

        try {
            const catRef = collection(db, 'categories')
            const q = query(catRef, orderBy('timeStamp', 'asc'), limit(4))
            const querySnap = await getDocs(q)
            let categories = [];
            querySnap.forEach((doc) => {
                return categories.push({
                    id: doc.id,
                    data: doc.data(),
                })
            })
            setCategories(categories)

        }
        catch (error) {
            toast.error("could not fetch categories")
            console.log({ error })
        }
        setIsDataLoaded(true);
    }

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };


    useEffect(() => {
        if (isMounted) {

            fetchCategories().then();
            fetchProducts().then();
            handleVideoLoad();
        }
        return () => {
            isMounted.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted])

    useEffect(() => {
        if (isVideoLoaded && isDataLoaded) {
            setLoading(false); // Set loading status to false when both video and data are loaded
        }
    }, [isVideoLoaded, isDataLoaded]);

    return (
        <> 
            {loading ?
                (<PageLoading />) : (
                    <>
                        <HeaderNav />
                        <HomeHero onVideoLoaded={handleVideoLoad} />
                        <HomeCategories categories={categories} />
                        <HomeProducts products={products} />
                        <MostViewed products={products} />
                        <HomeBanner />
                        <SubscribeForm />
                        <FooterNav />
                    </>)}
        </>
    )
}
export default Store;