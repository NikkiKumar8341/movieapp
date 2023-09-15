import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"
import Mock_Data from '../../mockdata/resCardMock.json'

test("should render restaurantCard component with props Data",()=>{
    render(<RestaurantCard   resData={Mock_Data}/>);
    const resturantName=screen.getByRole('heading', { name: "Taj Mahal-Abids" })
    // expect( resturantName).toBeInTheDocument();

    expect(resturantName).toMatchSnapshot();

})