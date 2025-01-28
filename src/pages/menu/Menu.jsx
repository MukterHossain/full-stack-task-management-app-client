import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Menu = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [menus, setMenus] = useState([])
    const [editId, setEditId] = useState(null)
    const axiosPublic = useAxiosPublic()

    // fatch menu
    useEffect(()=>{
        const menuData = async() =>{
            try {
                const res = await axiosPublic.get('/menu');
                setMenus(res.data)
            } catch (error) {
                console.log('data is not collect')
            }
        }
        menuData()
    },[axiosPublic]) 
  
    const handleMenus = async(e) =>{
      e.preventDefault();
      if(!name || !category || !price){
        alert('All fields are required!')
      }
      try {
        if(editId){
            const data= await axiosPublic.put( `/menu/${editId}`, {name, category, price})
            alert("Menu item updated successfully")
        }else{
            const res = await axiosPublic.post('/menu', {name, category, price});
            alert(res.data)
        }
        
        setName('')
        setCategory('')
        setPrice('')
        setEditId(null)
        refreshMenu()
      } catch (error) {
        alert('Menu item not added' , + error.res?.data || error.message)
      }
    }

    // delete 
    const handleDelete =async(id) =>{
        try {
            const res= await axiosPublic.delete(`/menu/${id}`);
            alert("Menu item delete successfully")
        } catch (error) {
            alert('Error deleting munu item', error)
        }
    }

    // update 
    const handleUpdate = (data) =>{
        setEditId(data._id);
        setName(data.name)
        setPrice(menus.price)
    }

    //  refresh
    const refreshMenu = async()=>{
        const res = await axiosPublic.get('/menu');
        setMenus(res.data)
    }
    return (
        <div>
            <div className="py-4 w-4/5 mt-12 md:mt-20 lg:mt-32 xl:mt-40  md:w-2/5 lg:w-1/3 mx-auto rounded-xl shadow-2xl bg-gray-50">
          <div className="text-center ">
            <h1 className="text-2xl text-blue-800 md:text-4xl font-bold">
              Add Menu Item!
            </h1>
            <p className="text-sm">Fill out the form to add a new menu item </p>
          </div>
          <form onSubmit={handleMenus} className="p-10 flex flex-col gap-y-4">
            <div className="">
              <label className="text-lg text-gray-700 pb-[4px]">Item name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                className="w-full py-2 border border-gray-200 outline-green-100 px-4 rounded-sm  "
                required
              />
            </div>
            <div className="">
              <label className="text-lg text-gray-700 pb-[4px]">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                className="w-full py-2 border border-gray-200 outline-green-100 px-4 rounded-sm "
                required
              />
            </div>
            <div className="">
              <label className="text-lg text-gray-700 pb-[4px]">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                className="w-full py-2 border border-gray-200 outline-green-100 px-4 rounded-sm "
                required
              />
            </div>

            <div className="text-center">
                <button className="bg-blue-600 hover:bg-green-600 transition duration-300 rounded-lg py-2 w-full text-lg font-semibold text-white">{editId ? 'Update': 'Add'}Menu</button>
              {/* <input className="bg-blue-600 hover:bg-green-600 transition duration-300 rounded-lg py-2 w-full text-lg font-semibold text-white" type="submit" value="Login" /> */}
            </div>
          </form>
        </div>
        {/* menu item */}
        <div className=" ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
                {menus?.map((item, i) =>(
                    <div key={i} className="rounded-xl shadow-2xl bg-gray-50 p-5">
                        <div>
                            <h1>Item: {item.name}</h1>
                            <p>Category: {item.category}</p>
                            <p>Price: {item.price}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <button onClick={() => handleUpdate(menus)} className="bg-blue-600 hover:bg-green-600 transition duration-300 rounded-lg py-2 px-4 text-lg font-semibold text-white">Edit</button>
                            <button onClick={() => handleDelete(menus._id)} className="bg-blue-600 hover:bg-green-600 transition duration-300 rounded-lg py-2 px-4 text-lg font-semibold text-white">Delete</button>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
        </div>
    );
};

export default Menu;