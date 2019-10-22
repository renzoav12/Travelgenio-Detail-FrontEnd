import React, { Component } from 'react';
import Detail from '../../components/Detail';
import './DetailContainer.scss';

export interface DetailContainerProps {
}

class DetailContainer extends Component<DetailContainerProps> {

    render() {

      const accommodation = {
        content: {
          name: "Hotel Hilton",
          category: {
            id: "5.0",
            code: "5.0"
          },
          location: {
            address: {
              street: "Av. Libertador",
              streetNumber: "12300",
              city: "San Isidro",
              state: "Buenos Aires",
              country: "Argentina"
            },
            geoPosition: {
              latitude: -30.012345,
              longitude: -50.564789
            }
          },
          amenities:[
            {
              "id": "1073743304",
              "name": "Karaoke"
            },
            {
              "id": "10",
              "name": "Free airport transportation"
            },
            {
              "id": "1073742907",
              "name": "Internet access"
            }          
          ],
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vestibulum commodo orci in suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et magna est. Curabitur sit amet tortor vestibulum velit accumsan volutpat. Nunc sed gravida mi, id accumsan augue. Ut nec risus felis. Suspendisse pellentesque sed dolor ac convallis. Vivamus tincidunt rhoncus eros, vel vehicula libero pellentesque nec. Praesent facilisis eros quis purus mattis, non tempus libero fermentum. Phasellus tincidunt porttitor nisi, id eleifend ipsum gravida at. Sed eu risus urna. Proin ipsum risus, commodo vitae volutpat vitae, ornare a odio. Cras feugiat rutrum turpis. In auctor, arcu eget consectetur tempor, tortor felis rutrum augue, id condimentum ante dolor vitae nibh. Morbi nec auctor libero. Aliquam erat volutpat.\nAliquam erat volutpat. Nunc congue turpis et diam condimentum, vel mollis lorem pharetra. Pellentesque nec mauris eleifend arcu sodales elementum nec nec massa. Mauris fringilla iaculis enim. Suspendisse nec metus in dui finibus suscipit. Fusce pretium, ipsum sit amet fringilla sagittis, metus eros sollicitudin mauris, vitae mollis diam nisi eu sapien. Cras orci diam, congue eu nunc eget, pellentesque aliquet lacus. Ut tellus sem, convallis in metus vel, tempor mattis ipsum. Etiam volutpat, elit sed venenatis eleifend, augue sapien ornare est, sit amet iaculis erat metus id arcu. Donec ullamcorper at nisl sed malesuada. In hac habitasse platea dictumst. Mauris sed felis vel nisl ullamcorper dapibus at vitae mauris. Mauris cursus odio nec sapien lobortis, ut tempus elit venenatis.\nPhasellus et accumsan nulla. Quisque sollicitudin ornare dolor eu facilisis. Maecenas fringilla justo vel congue auctor. Vivamus pharetra est at nisi dapibus blandit ac vel lectus. Nunc pretium facilisis ultrices. Maecenas et lectus ut metus bibendum blandit a sit amet eros. Phasellus hendrerit enim vitae nisi fermentum, ac pharetra sem ultricies. Nulla tincidunt metus libero, in condimentum ex sagittis id. Pellentesque ultricies pharetra ligula. Fusce pulvinar dolor nisl, non dictum ligula aliquam ut. Proin scelerisque mollis nulla, in fringilla orci tincidunt non. Maecenas egestas, neque vitae fermentum ornare, quam justo feugiat nisl, at consectetur eros mi id diam. Suspendisse vel erat a nibh cursus vehicula sit amet id orci. Donec hendrerit hendrerit gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
          checkIn: "15:00",
          checkOut: "10:00",
          checkInInstructions: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Phasellus interdum ex vulputate tortor facilisis venenatis.",
            "Mauris tristique magna et lorem tempor gravida."
          ],
          images: [
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/946c5610_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/72a2a331_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/9aea1d21_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/ec53d0c9_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/ee78681f_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/fbb25ba3_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/09fcc24b_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/efa3c534_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/8141351f_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/7fe7d20c_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/cf349530_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/d9cf8b69_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/573a7904_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/c0681f61_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/988e89fe_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/5bbacd28_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/99e34808_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/b813eebd_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/15453099_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/9387017e_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/be492f81_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/48412a59_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/874c49e4_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/242e9c3e_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/310fb5d2_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/784c6407_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/897fec9c_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/a09aadeb_b.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/c4b91b97_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/143ff168_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/e56d1b76_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/e2def04c_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/79ef1eb4_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/3dffbb31_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/d94cbd4f_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/295907b4_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/3053eb91_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/5cf6873b_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/36f63094_b.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/508c8dda_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/d83f0165_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/83be1c9a_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/3f9361e3_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/9ad83566_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/6c7e3b14_z.jpg"}
          ]      
        }
      };
  
console.info(accommodation);

        return <Detail {...accommodation}/>;
    }
}

export default DetailContainer;