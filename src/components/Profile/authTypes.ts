export type TAuthInfo = {
    loading: boolean;
    currentUser: TAuthUser;
    error: boolean;
    message: string;
    referenceName?: string;
    provider?: string;
  };

  export type TAuthUser = {
    name: string;
    username: string;
    sex: string;
    genderTxt: string;
    dob: string;
    dobText: string;
    phone: string;
    email: string;
    photoUrl: string;
    userUid: string;
    refreshToken: string;
  };