import conf from "../conf/conf.js";
import { Client,ID,Databases,Storage,Query } from "appwrite";


export class appwriteService{
  client=new Client();
  Databases;
  bucket;
  constructor(){
    this.client
    .setEndpoint(conf.appwriteURl)
    .setProject(conf.appwriteProjectId);
    this.Databases=new Databases(this.client);
    this.bucket=new Storage(this.client);
  }

  async createPost({title,slug,content,featuredImage,status,userId}){
    try{
        return await this.Databases.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,slug,{
            title,
            content,
            featuredImage,
            status,
            userId,
          }
          
        )

    }catch(error){
      console.error("APPWRITE ERROR",error);
    }
  }

  async updatePost(slug,{title,content,featuredImage,status}){
   
    try{
      await this.Databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,content,
          featuredImage,
          status
        }
      )
} catch(error){
      console.error("APPWRITE ERROR",error);
    }
  }
  async deletePost(slug){
    try{
      await this.Databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
      return true;
    }catch(error){
      console.error("APPWRITE ERROR",error);
      return false;
    }
  }
  async getPost(slug){
    try{
       return await this.Databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
    }
    catch(error){
      console.error("APPWRITE ERROR",error);
      return false;
    }
  }

  async getPosts(queries=[Query.equal("status","active")]){
    try{
       return await this.Databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries,)
    }catch(error){
      console.error("APPWRITE ERROR",error);
      return false;
  }
}

 async uploadFile(file){
   try{
       return await this.bucket.createFile(
        conf.appwriteStorageId,ID.unique(),file
       );
   }catch(error){
     console.error("APPWRITE ERROR",error);
     return false;
   }

}

async deleteFile(fileId){
  try{
    await this.bucket.deleteFile(conf.appwriteBucketId,fileId);
    return true;
  }catch(error){
    console.error("APPWRITE ERROR",error);
    return false;
  }
}

getFilePreview(fileId){
  return this.bucket.getFilePreview(conf .appwriteBucketId,fileId);
}
}

const service=new Service();
export default service;