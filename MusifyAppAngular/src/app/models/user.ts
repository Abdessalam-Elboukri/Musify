import {Countries} from "./countries";

export class UserApp{

      id: number;
      userName: string;
      email: string;
      password: string;
      avatar: string;
      phone: string;
      isBanned: boolean;
      isSubscribed: boolean;
      country:Countries;
      createdAt:Date;


}
