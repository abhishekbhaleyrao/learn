import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/ExperienceCloudProject';


export default class QuickLinks extends LightningElement {

    data = [
                {
                    id:1,
                    image: Image_Url + '/ExperienceCloudProject/Projects.png',
                    text:'Projects',
                },
                {
                    id:2,
                    image: Image_Url + '/ExperienceCloudProject/Skills.png',
                    text:'Skills',
                },
                {
                    id:3,
                    image: Image_Url + '/ExperienceCloudProject/Certification.png',
                    text:'Certifications',
                }
    ]
}