export * from './auth.service';
import { AuthService } from './auth.service';
export * from './classes.service';
import { ClassesService } from './classes.service';
export * from './projects.service';
import { ProjectsService } from './projects.service';
export * from './schools.service';
import { SchoolsService } from './schools.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AuthService, ClassesService, ProjectsService, SchoolsService, UserService];