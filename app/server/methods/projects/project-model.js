/**
 * Created by jr on 8/26/16.
 */
import Projects from '/lib/collections/projects';
const projectInsert = (project)=> {
  Projects.insert(project);
};
const projectUpdate = (project)=> {
  Projects.update({_id: project});
};
const projectDelete = (projectId)=> {
  Projects.remove({_id: projectId});
};
const projectModel = {
  insert: (project)=>projectInsert(project),
  update: (projectId)=>projectUpdate(projectId),
  delete: (projectId)=>projectDelete(projectId),
}
export {projectModel};