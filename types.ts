type TimePeriod = {
  name: string;
  start: string;
  end: string;
  backgroundImg: string;
  foregroundImg: string;
  description: string;
  locations: Location[];
  timePoints?: string[];
};

type Location = {
  name: string;
  description: string;
  img: string;
};

type Booking = {
  name: string;
  email: string;
  timePeriod: string;
  location: string;
  timePoint: string;
};
