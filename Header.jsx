import React from 'react'


function Header() {
  return (
    <div className="container mt-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-10">
            <div className="card p-3 py-4">
                <h5>Price Comparision</h5>
                <div className="row g-3 mt-2">
                    <div className="col-md-3">
                      <div className="dropdown">
                            <select name="cars" id="cars" className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                  
                                <option className="dropdown-item" value="All Categories">All Categories</option>
                                <option className="dropdown-item" value="Electronics">Electronics</option>
                                <option className="dropdown-item" value="Clothing & Accessories">Clothing & Accessories</option>
                                <option className="dropdown-item" value="Books">Books</option>
                                <option className="dropdown-item" value="Appliances">Appliances</option>
                                <option className="dropdown-item" value="Gift Cards">Gift Cards</option>
                                <option className="dropdown-item" value="Furniture">Furniture</option>
                                <option className="dropdown-item" value="Jewellery">Jewellery</option>
                                <option className="dropdown-item" value="Music">Music</option>
                                <option className="dropdown-item" value="Software">Software</option>
                                <option className="dropdown-item" value="Health & Personal Care">Health & Personal Care</option>
                                <option className="dropdown-item" value="Beauty">Beauty</option>
                                <option className="dropdown-item" value="Luggage & Bags">Luggage & Bags</option>
                                <option className="dropdown-item" value="Office Products">Office Products</option>
                            </select>
                        </div>                       
                    </div>
                    <div className="col-md-6"> <input type="text" className="form-control" placeholder="Enter the Product Name"/> </div>
                    <div className="col-md-3"> <button className="btn btn-secondary btn-block">Search Results</button> </div>
                </div>                
            </div>
        </div>
    </div>
</div>
  )
}

export default Header