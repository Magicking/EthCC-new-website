export type UnlockState = 'pending' | 'locked' | 'unlocked';

export type UnlockFormValues = {
  email: string;
  fullName: string;
  phone: string;
  address1?: string;
  address2?: string;
  zipcode?: string;
  city?: string;
  country?: string;
};
