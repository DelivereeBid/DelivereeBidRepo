 <div className="container-fluid mt-3">
                <div className="col-3">
                    <h1>Tes</h1>
                </div>
                <div className="col-9">
                    <div className="stepwizard">
                        {   role === 'shipper' &&
                            <div className="stepwizard-row setup-panel">
                                <div className="stepwizard-step">
                                    <div  className="btn btn-secondary btn-circle" disabled="disabled">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                    </div>
                                    <p>{shipper.from}</p>
                                </div>
                                <div className="stepwizard-step">
                                    <div className="btn btn-secondary btn-circle" id="ProfileSetup-step-2">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </div>
                                    <p>
                                        { post &&
                                            post.tracking_log
                                        }

                                    </p>
                                </div>
                                <div className="stepwizard-step">
                                    <div  className="btn btn-secondary btn-circle"  disabled="disabled" id="Security-Setup-step-3">
                                        <span className="glyphicon glyphicon-ok"></span>
                                    </div>
                                    <p>
                                        {
                                            post && shipper &&

                                                post.tracking_log === shipper.to
                                                ? 'Delivered'
                                                : shipper.to
                                        }

                                    </p>
                                </div>
                            </div>
                        }


                    </div>
                    <div className="row justify-content-center h-100 contact-in mt-5 mb-5">
                    <div className="col-md-4 col-12 col-xl-8 chat">
                        {/* {   isMyRoom && */}
                        <div className="card card-chat">
                            <div className="card-header-chat msg_head">
                                <div className="d-flex bd-highlight">
                                    <div className="user_info">
                                        <span className='text-primary'>To: {username}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body msg_card_body">


                                {/* <div className="d-flex justify-content-start mb-4">
                                    <div className="msg_cotainer">
                                    {outputMessage.username}: {outputMessage.text}
                                    </div>
                                </div> */}


                                 {/* {messages.map((message, index) => {
                                    if(message.id === yourID ) {
                                        return (
                                            <div className="d-flex justify-content-start mb-4" key={index}>
                                                <div className="msg_cotainer">
                                                    {message.body}
                                                </div>
                                            </div>
                                        )
                                    }
                                    return (
                                        <div className="d-flex justify-content-end mb-4" key={index}>
                                            <div className="msg_cotainer_send">
                                                {message.body}
                                            </div>
                                        </div>
                                        )
                                    })

                                } */}



                            </div>
                            <div className="card-footer-chat">
                                <form onSubmit={(e) => sendMessageAlt(e)}>
                                    <div className="input-group">

                                        <textarea name="" className="form-control type_msg" value={message} onChange={handleChange} placeholder="Say something..." ></textarea>
                                        <button type='submit' className="btn">
                                            <span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
                                        </button>


                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-6 col-xl-4 map col-12">
                        {   role === 'transporter' &&
                            <div className="card map-div">
                                <iframe
                                width="100%"
                                height="400"
                                frameborder="0"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAaoKpi0CH9Ur9s7sVNfyHMN8ANlLa6JIw&center=${latitude}
                                ,${longitude}&maptype=satellite&q=a`}
                                allowfullscreen>
                                </iframe>
                                {/* {
                                    // let latlon = position.coords.latitude + "," + position.coords.longitude;
                                    latitude && longitude ?
                                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude +','+longitude}
                                    &zoom=14&size=600x400&sensor=false&markers=color:red%7C${latitude + ',' + longitude}
                                    &key=AIzaSyAaoKpi0CH9Ur9s7sVNfyHMN8ANlLa6JIw`} alt=''></img> : null
                                } */}
                                <div className="card-body">
                                    <h4 className="card-title mx-0 text-left">Update Location</h4>
                                    <form>
                                        <div className="ml-1 row d-flex justify-content-between">

                                            <PlacesAutocomplete
                                                value={address}
                                                onChange={handleSearchChange}
                                                onSelect={handleSelect}
                                                >
                                                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                    <div>
                                                        <input
                                                        {...getInputProps({
                                                            placeholder: 'Search Places ...',
                                                            className: 'location-search-input',
                                                        })}
                                                        />
                                                        <div className="autocomplete-dropdown-container">
                                                        {loading && <div>Loading...</div>}
                                                        {suggestions.map(suggestion => {
                                                            const className = suggestion.active
                                                            ? 'suggestion-item--active'
                                                            : 'suggestion-item';
                                                            // inline style for demonstration purpose
                                                            const style = suggestion.active
                                                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                            return (
                                                            <div
                                                                {...getSuggestionItemProps(suggestion, {
                                                                className,
                                                                style,
                                                                })}
                                                            >
                                                                <span>{suggestion.description}</span>
                                                            </div>
                                                            );
                                                        })}
                                                        </div>
                                                    </div>
                                                    )}
                                            </PlacesAutocomplete>
                                            <Button onClick={handleSubmitLoc} className="px-1 p-0 ml-1" style={{height: '30px'}} variant="primary">Update Location</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                        
                        {
                            role === 'shipper' &&
                            <div className="card mb-3">
                                    <div className="card-body">
                                        <h4 className="card-title">Contact</h4>
                                        <h6 className="card-subtitle mb-2 text-muted">
                                            {
                                                role === 'transporter'
                                                ? profile_shipper.username
                                                : transporter.username
                                            }
                                        </h6>
                                        <div className="card-text">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><i class="fas fa-clock mr-2 text-center"></i></td>
                                                        <td>
                                                            {
                                                                role === 'transporter'
                                                                ? profile_shipper.email
                                                                : transporter.email
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                        }

                        { post && shipper && post.tracking_log === shipper.to && role === 'shipper' &&
                            <div>
                                <div class="btn-group btn-block" role="group" aria-label="Basic example">
                                    {/* <button type="button" class="btn btn-danger">Complaint</button> */}
                                    <button onClick={(e) => removeBid(e, bidID)} type="button" class="btn btn-success">Yeayy, your order has been deliverd!</button>
                                </div>
                            </div>
                        }

                    </div>
                </div>    
                </div>
            </div>