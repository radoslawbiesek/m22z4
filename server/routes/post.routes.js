import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

// Update a post by cuid
router.route('/posts/:cuid').put(PostController.editPost);

// Thumb up a post by cuid
router.route('/posts/up/:cuid').put(PostController.updatePostVotes);

// Thumb up a post by cuid
router.route('/posts/down/:cuid').put(PostController.updatePostVotes);


export default router;
