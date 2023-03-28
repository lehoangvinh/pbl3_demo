// import React from 'react';

// function Item(props) {
//     return (
//         <div className='Item'>
//             <img src={props.linkURL} alt="anh" className='Item-Image margin-auto' />
//             <div className='Item-Content'>
//                 <p className='Item-Content-Detail'>
//                     {props.detail === undefined ? ' CAFE Sữa aljhdnlalabn\njsdulahlabn\nlabn\\ndbndlabn\nsdfádasdasdasdadasdas  sdfsdfs  ' : props.detail}
//                 </p>
//                 <p className='Item-Content-Price'>
//                     100000Đ
//                 </p>
//             </div>
// <div class="Item-Modal">
//     <div class="Item-Action">
//         <div class='Item-Detail'>
//             <p>Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.</p>
//         </div>
//         <div class="Item-Size">
//             <p>Size: </p>
//             <button type="button" class="Btn Item-Button-Size"
//                 onClick={() => {
//                     const content = document.getElementsByClassName('Item-Button-Size');
//                     alert(content[0].textContent)
//                     console.log(content);
//                 }}
//             >S</button>
//             <button type="button" class="Btn Item-Button-Size"
//                 onClick={() => {
//                     const content = document.getElementsByClassName('Item-Button-Size');
//                     alert(content[0].textContent)
//                     console.log(content);
//                 }}
//             >M</button>
//             <button type="button" class="Btn Item-Button-Size"
//                 onClick={() => {
//                     const content = document.getElementsByClassName('Item-Button-Size');
//                     alert(content[0].textContent)
//                     console.log(content);
//                 }}
//             >L</button>
//             <button type="button" class="Btn Item-Button-Size"
//                 onClick={() => {
//                     const content = document.getElementsByClassName('Item-Button-Size');
//                     alert(content[0].textContent)
//                     console.log(content);
//                 }}
//             >XL</button>
//         </div>
//         <div class="Item-Button-Main">
//             <button type="button" class="Btn Item-Button-Buy"
//                 onClick={() => {
//                     const content = document.getElementsByClassName('Item-Button-Buy');
//                     alert(content[0].textContent + " thành công")
//                     console.log(content);
//                 }}
//             >Mua</button>
//             <button type="button" class="Btn Item-Button-Add"
//                 onClick={() => {
//                     const content = document.getElementsByClassName('Item-Button-Add');
//                     alert(content[0].textContent + " thành công")
//                 }}
//             >Thêm vào giỏ hàng</button>
//         </div>
//     </div>
// </div>
//         </div>
//     );
// }

// export default Item;
import React from 'react';

function Item(props) {
    return (
        <div className='Item'>
            <img src={props.linkURL} alt="anh" className='Item-Image' />
            <div className='Item-Content'>
                <div className='Item-Content-Detail'>
                    <p>
                        {props.detail === undefined ? ' CAFE Sữa  ' : props.detail}
                    </p>
                </div>
                <div className='Item-Content-Price'>
                    <p>
                        {props.detail === undefined ? ' 100000đ' : props.detail}
                    </p>
                </div>
            </div>
            <div class="Item-Action">
                <div class="Item-Size">
                    <p>Size: </p>
                    <button type="button" class="Btn Item-Button-Size"
                        onClick={() => {
                            const content = document.getElementsByClassName('Item-Button-Size');
                            alert(content[0].textContent)
                            console.log(content);
                        }}
                    >S</button>
                    <button type="button" class="Btn Item-Button-Size"
                        onClick={() => {
                            const content = document.getElementsByClassName('Item-Button-Size');
                            alert(content[0].textContent)
                            console.log(content);
                        }}
                    >M</button>
                    <button type="button" class="Btn Item-Button-Size"
                        onClick={() => {
                            const content = document.getElementsByClassName('Item-Button-Size');
                            alert(content[0].textContent)
                            console.log(content);
                        }}
                    >L</button>
                    <button type="button" class="Btn Item-Button-Size"
                        onClick={() => {
                            const content = document.getElementsByClassName('Item-Button-Size');
                            alert(content[0].textContent)
                            console.log(content);
                        }}
                    >XL</button>
                </div>
                <div class="Item-Button-Main">
                    <button type="button" class="Btn Item-Button-Buy"
                        onClick={() => {
                            const content = document.getElementsByClassName('Item-Button-Buy');
                            alert(content[0].textContent + " thành công")
                            console.log(content);
                        }}
                    >Mua</button>
                    <button type="button" class="Btn Item-Button-Add"
                        onClick={() => {
                            const content = document.getElementsByClassName('Item-Button-Add');
                            alert(content[0].textContent + " thành công")
                        }}
                    >Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
        // </div >
    );
}

export default Item;