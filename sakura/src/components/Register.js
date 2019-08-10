    
import React from "react";

export default class AboutUs extends React.Component {
    goToRegister(){
      window.location.assign("/register");  
    };
    render(){
        return(
            <div className="register">
                <h2 className="text-center text-primary">Sign Up</h2>
                <form formGroup="registerForm">
                    <hr />
                    <div className="form-group row">
                        <label for="userName" className="col-sm-3">User Name</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" formControlName="userName" placeholder="User Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="knownAs" className="col-sm-3">What do you like to be called?</label>
                        <div className="col-sm-9">
                            <input className="form-control" placeholder="Name" formControlName="knownAs" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label twenty">I am a</label>
                        <label className="radio-inline">
                            <input className="mr-3" type="radio" value="male" formControlName="gender" />Male
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" value="female" formControlName="gender" />Female
                        </label>
                    </div>
                    <div className="form-group">
                        <div className="plants">
                            <label className="control-label plants-title">I like to Plant: </label>
                            <div className="choices types-of-plants">
                                <label className="radio-inline">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Tomatoes
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Cucumbers
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Sweet Peppers
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Beans
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Peas
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Carrots
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Summer Squash
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Lettuce
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Watermelon
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Onion
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Sweet Corn
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Cabbage
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Potatoes
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Radishes
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Mint
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Basil
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Ciliantro
                                </label>


                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Beets
                                </label>

                                <label className="radio-inline ml-3">
                                <input className="mr-3" type="checkbox" formControlName="plantType" />Zucchini
                                </label>
                            
                            </div>
                        </div>
                        <div class="other-plants">
                            <label for="other" className="col-sm-3">Other:</label>
                            <input className="form-control other" placeholder="Other" formControlName="other" />
                        </div>
                        
                    </div>

                    <div className="form-group">
                        <label className="control-label ten">Do you have a garden?</label>
                        <label className="radio-inline">
                        <input className="mr-3" type="radio" formControlName="garden?" />Yes
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" formControlName="garden?" />No
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="control-label ten">Flowers or Produce?</label>
                        <label className="radio-inline">
                            <input className="mr-3" type="radio" formControlName="plantPref" />Flowers
                        </label>
                        <label className="radio-inline ml-3">
                            <input className="mr-3" type="radio" formControlName="plantPref" />Produce
                        </label>
                        <label className="radio-inline ml-3">
                            <input className="mr-3" type="checkbox" formControlName="plantPref" />Both
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="control-label ten">Organic Produce?</label>
                        <label className="radio-inline">
                        <input className="mr-3" type="radio" formControlName="organic" />Yes
                        </label>
                        <label className="radio-inline ml-3">
                        <input className="mr-3" type="radio" formControlName="organic" />No
                        </label>
                    </div>

                    <div className="form-group row">
                        <label for="time" className="col-sm-3">Available Hours</label>
                        <div className="col-sm-9">
                            <input className="form-control" placeholder="Avg available times per week" formControlName="time" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="dateOfBirth" className="col-sm-3">Date of Birth</label>
                        <div className="col-sm-9">
                            <input className="form-control" placeholder="Date of Birth" formControlName="dateOfBirth" type="date" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="city" className="col-sm-3">Mailing Address</label>
                        <div className="col-sm-9">
                        <input className="form-control" placeholder="Full Address with City and State" formControlName="city" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="email" className="col-sm-3">E-Mail Address</label>
                        <div className="col-sm-9">
                        <input className="form-control" placeholder="Email" formControlName="city" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="password" className="col-sm-3">Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" formControlName="password" placeholder="Password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="confirmPassword" className="col-sm-3">Confirm Password</label>
                        <div className="col-sm-9">
                        <input type="password" className="form-control" formControlName="confirmPassword" placeholder="Confirm Password" />
                        </div>
                    </div>

                    <div className="form-group text-center">
                        <button className="btn btn-success mr-2" type="submit">Register<i className="fa fa-spinner fa-spin"></i></button>
                        <button className="btn btn-danger" type="button">Cancel</button>
                    </div>
    
                </form>
            </div>
        );
    }
}