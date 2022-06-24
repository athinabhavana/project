import {useState} from 'react'
import {useForm} from 'react-hook-form'

function Help(){
    
    const { register, handleSubmit, formState: { errors } } = useForm()

    let [usersList, setUsersList] = useState([])

    //console.log(errors);

    //form submission
    const onFormSubmit = (userObj) => {
        // console.log(userObj);
        setUsersList([...usersList, userObj])
    }

    return(
        <div>
            <p className='text-center display-3 text-dark'> Contact Form</p>
            <form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor='username'>username</label>
                    <input type="text" id="username" className="form-control" {...register("username",{required:true,minLength:4,maxLength:6})} />
                    {errors.username?.type === 'required' && <p className='text-danger'>* Username is required</p>}
                    {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                    {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 6</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor='email'>email</label>
                    <input type="email" name="" id="email" className="form-control" {...register("email")}/>
                    {errors.email?.type === 'required' && <p className='text-danger'>* Email is required</p>}
                </div>
                <div className='mb-3'>
                    <label>Gender</label>
                    <div class="form-check">
                        <input type="radio" className="form-check-input" id='male' {...register("male")} value={"Male"}/>
                        <label htmlFor='male' className='form-check-lable'>Male</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id='male' {...register("male")} value={"female"}/>
                        <label htmlFor='male' className='form-check-lable'>Female</label>
                    </div>
                </div>
                <button type="submit" className='btn btn-success d-bliock mx-auto'>Submit</button>
            </form>
              {/* table view of users list */}
              <p className="display-2 text-center text-danger">List of users</p>
            <div className="container">
                {/* if userList if empty */}
                {usersList.length == 0 && <h1 className='text-primary text-center'>List is empty</h1>}
                {/* if userslist is non-empty */}
                {usersList.length !== 0 &&
                    <table className="table text-center">
                        {/* thead */}
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        {/* tbody */}
                        <tbody>
                            {
                                usersList.map((userObj, index) => <tr key={index}>
                                    <td>{userObj.username}</td>
                                    <td>{userObj.email}</td>
                                    <td>{userObj.male}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }

            </div>
        </div>
    )
}

export default Help;