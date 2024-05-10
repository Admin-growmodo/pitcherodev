import { picoapp } from "picoapp"

import AccountLogin from "@/components/AccountLogin"
import Address from "@/components/Address"
import AddressForm from "@/components/AddressForm"
import CartDepositItem from "@/components/CartDepositItem"
import CollapsibleContent from "@/components/CollapsibleContent"
import ContentToggle from "@/components/ContentToggle"
import FacetsDesktop from "@/components/FacetsDesktop"
import Header from "@/components/Header"
import HeaderNav from "@/components/HeaderNav"
import IframeVideo from "@/components/IframeVideo"
import MenuDrawer from "@/components/MenuDrawer"
import Modal from "@/components/Modal"
import ModalVideo from "@/components/ModalVideo"
import ProductCarousel from "@/components/ProductCarousel"
import ProductCounter from "@/components/ProductCounter"
import ProductItem from "@/components/ProductItem"
import ProductSelection from "@/components/ProductSelection"
import Tabs from "@/components/Tabs"
import ProductSelect from "@/components/ProductSelect"
import Cart from "@/pages/Cart"
import CheckoutProcessPlayer from "@/pages/CheckoutProcessPlayer"
import CheckoutProcessTeam from "@/pages/CheckoutProcessTeam"
import Collection from "@/pages/Collection"
import Product from "@/pages/Product"
import Columns from "@/sections/Columns"
import ColumnsSlider from "@/sections/ColumnsSlider"
import Faq from "@/sections/Faq"
import ImageGridSlider from "@/sections/ImageGridSlider"
import LogoList from "@/sections/LogoList"
import MediaSlider from "@/sections/MediaSlider"
import MediaText from "@/sections/MediaText"
import Metrics from "@/sections/Metrics"
import MetricsGrid from "@/sections/MetricsGrid"
import OfferApp from "@/sections/OfferApp"
import PageNavigation from "@/sections/PageNavigation"
import Register from "@/sections/Register"
import Reviews from "@/sections/Reviews"
import TextBlocksBorder from "@/sections/TextBlocksBorder"
import TextMedia from "@/sections/TextMedia"

const initialState = { navigation: {} }

const components = {
  AccountLogin,
  Address,
  AddressForm,
  Cart,
  CartDepositItem,
  CheckoutProcessPlayer,
  CheckoutProcessTeam,
  ContentToggle,
  Collection,
  CollapsibleContent,
  Columns,
  ColumnsSlider,
  FacetsDesktop,
  Faq,
  Header,
  HeaderNav,
  LogoList,
  MediaSlider,
  MediaText,
  MenuDrawer,
  Metrics,
  MetricsGrid,
  Modal,
  ModalVideo,
  IframeVideo,
  OfferApp,
  PageNavigation,
  ProductItem,
  ProductSelection,
  ProductCarousel,
  ProductCounter,
  Product,
  Register,
  Reviews,
  Tabs,
  ProductSelect,
  TextMedia,
  TextBlocksBorder,
  ImageGridSlider,
}

export default picoapp(components, initialState)
