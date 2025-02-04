export interface ILesson {
  name: string;
  duration: string;
  title: string;
  description: string;
  video_link: string;
  quize_link: string;
}

interface IModule {
  name: string;
  lessons: ILesson[];
}

export interface IModules {
  [key: string]: {
    modules: IModule[];
  };
}
