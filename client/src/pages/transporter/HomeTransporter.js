import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchTransporter, fetchTransporterById } from "../../store/index";
import { NavbarTrans } from "../../components";
import wave from '../../assets/wave.svg'
import { Button } from 'react-bootstrap'

function HomeTransporter(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const transporter = useSelector((state) => state.dataTransporter);
  const trucking = useSelector((state) => state.transporter);
  const transporterId = +localStorage.getItem("transporterId");
  console.log(transporter, "tra");
  console.log(
    transporter,
    "transporter",
    trucking,
    "trucking",
    transporterId,
    "transporterId"
  );

  useEffect(() => {
    dispatch(fetchTransporter());
    dispatch(fetchTransporterById(transporterId));
  }, [dispatch]);

  const changePage = (id) => {
    history.push(`/transporter/${id}`);
  };

  const toControlPage = (ShipperId, post) => {
    const payload = {
      BidId: post[0].BidId,
      id: post[0].id,
    };

    dispatch({
      type: "SET_BID_ID_POST_ID",
      payload: payload,
    });
    console.log(post, "ini di 36 HomeTransporter");
    history.push(
      `/controlPage/transporter_${trucking.username}_${trucking.id}_${trucking.email}_${ShipperId}`
    );
  };

  function filteredPosts (el, id) {
    const result = el.Posts.filter(el => {
      return el.TransporterId == id
    })
    console.log(result.length > 0, 'resz')
    return result;
  }

  // const filterBid = transporter.filter((el) => {
  //   return el.id ==
  // })

  const milihTransporter = transporter.filter((el) => {
    return (
      el.TransporterId == localStorage.getItem("transporterId") ||
      el.status == "available"
    );
  });

  // console.log(filterBid, 'feltier')
  return (
    <>
      <NavbarTrans />
      {/* {JSON.stringify(trucking)} */}
      <img style={{top: '10px', zIndex: '-1', position: 'fixed'}} width= '100%' src={wave}/>
      <div className="content" stye={{margin: '0 1%'}}>
        <div className="row d-flex justify-content-between">
          <div className="col-md-3 col-12">
            <div class="card shadow-sm profile-sidebar " style={{borderRadius: '15px'}}>

              <div class="profile-userpic">
                { !trucking.profile_picture
                    ? <img
                    src="https://www.w3schools.com/howto/img_avatar2.png"
                    class="img-responsive" alt="" />
                    : <img
                    src={trucking.profile_picture}
                    class="img-responsive" alt="" />

                }

              </div>
              <div class="profile-usertitle">
                <div class="profile-usertitle-job">
                  {trucking.username}
                </div>
                <div class="profile-usertitle-name">
                  <i class="fas fa-envelope"></i> {trucking.email}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-12">
            <div className="card px-4 py-2 mb-4 text-white" style={{border: '0px', backgroundColor: 'transparent'}}>
              <span className="row">
                <h3 className="mt-1 ml-1">Find your order </h3>
               
              </span>
            </div>
        {milihTransporter.map((el, key) => (
          <div key={key} className="card mb-4 shadow" style={{borderRadius: '15px', borderColor: '#0099ff'}}>
          <div class="row no-gutters">
            <div className='col-4 d-flex justify-content-center align-items-center'>
             
                <img className='img-fluid' src={el.product_picture} alt='' style={{  width: '250px', height: '250px', objectFit: 'cover', objectPosition: 'center'}}></img>
           
            </div>
            <div className='col-8  justify-content-end align-items-center'>
            
                <div class="card-body mt-3">
                  <div className="mx-1 my-0  card-test">
                    <div className='row mb-3'>
    
                      <div className='col-8'>
                        <h5 class="card-title text-left text-blueish" style={{marginBottom:'0rem', textTransform: 'capitalize'}}>{el.product_name}</h5>
    
                      </div>
    
                      
                    </div>
                  </div>
                  {/* <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p> */}
                  <div class="input-group mt-1 mb-3">
                    <span class="input-group-text" id="basic-addon1" style={{width: '70px'}}>From</span>
                    <div className="input-group-text" style={{backgroundColor: 'transparent', width: '85%'}}>
                      {el.from}
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1" style={{width: '70px'}}>To</span>
                    <div className="input-group-text" style={{backgroundColor: 'transparent', width: '85%'}}>
                      {el.to}
                    </div>
                  </div>
                  <p className='float-right mr-1'>
                  {el.Posts.some((post) => post.status === "accepted") ? (
                  <button
                    onClick={() => toControlPage(el.ShipperId, el.Posts)}
                    className="btn btn-primary"
                  >
                    Start
                  </button>
                ) : el.Posts.some((post) => post.status === "Pending" && post.TransporterId === transporterId) ? (
                  ""
                ) : (
                  <button
                    onClick={() => changePage(el.id)}
                    className="btn btn-success"
                  >
                    Bid Your Price !
                  </button>
                )}
                     
                  </p>
                </div>
              {/* </div> */}
            </div>
    
    
          </div>
        </div>
          // <div key={key} className="card-deck mx-auto col-sm-4">
          //   <div id="card-size" className="card">
          //     <div className="card-body mt-2 text-center mx-auto">
               
          //       {/* <h5>{JSON.stringify(el.Posts[0])}</h5> */}
          //       {console.log(transporter[0].ShipperId, "awa")}
          //       <div className="row mb-3">
          //         <div className="col-8">
          //           <h5 className="fas fa-suitcase">{el.product_name}</h5>
          //         </div>
          //       <img
          //         className="card-img-top"
          //         src={el.product_picture}
          //         style={{ width: 150, height: 150 }}
          //       ></img>
                 
          //       <h5 className=" mt-2">{el.description}</h5>
          //       <h5 className="fas fa-house-user mt-2">{el.from}</h5>
          //       <h5 className=" mt-2">{el.to}</h5>
                
          //     </div>
          //     </div>
          //   </div>
          // </div>
        ))}
         </div>
          </div>
        </div>
    </>
  );
}

export default HomeTransporter;
