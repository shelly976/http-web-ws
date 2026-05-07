import {UserModel} from '@repo/db';

export default async function Home(){
  const user=await UserModel.findOne();
  return(<div>
    {user?.username}:{user?.password}
  </div>)
}