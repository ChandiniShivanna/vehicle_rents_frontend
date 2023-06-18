import React from 'react';
import "./all.css"
function NoWheels(props) {
    const {handleWheel} = props
    return (
        <div className='name-form text-white'>
            <form>
                <h4>Number of wheels</h4>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="4" onChange={handleWheel} value={4}/>
                    <label class="form-check-label" for="4">
                        4 Wheeler vehicle
                        <img className='img-fluid' src='https://m.media-amazon.com/images/I/711JdIgo84L._AC_UF1000,1000_QL80_.jpg'  alt=''/>
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="2" onChange={handleWheel} value={2}  />
                    <label class="form-check-label" for="2">
                        2 Wheeler vehicle
                        <img className='img-fluid' src='https://static.toiimg.com/thumb/msid-96396579,width-1070,height-580,imgsize-48460,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'  alt=''/>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default NoWheels;