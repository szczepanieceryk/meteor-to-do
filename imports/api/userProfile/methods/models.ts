export interface PhotoModel {
  key: string;
}

interface UserProfileModel {
  _id: string;
  userId: string;
  firstName: string;
  lastName?: string;
  userName: string;
  photo?: PhotoModel;
}

export default UserProfileModel;
