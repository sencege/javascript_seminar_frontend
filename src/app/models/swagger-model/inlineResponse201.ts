/**
 * globy-backend
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ClassesTeacher } from './classesTeacher';
import { InlineResponse201Tokens } from './inlineResponse201Tokens';

export interface InlineResponse201 {
    student: any; 
    user?: ClassesTeacher;
    tokens?: InlineResponse201Tokens;
}