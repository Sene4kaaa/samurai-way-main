import {addPost, deletePost, PostType, profileReducer, ProfileType} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCounts: 12},
        {id: 2, message: 'it\'s my first post', likesCounts: 11},
        {id: 3, message: 'BlaBla', likesCounts: 15},
        {id: 4, message: 'Dada', likesCounts: 20},
    ] as PostType[],
    profile: null as null | ProfileType,
    status: ''
}

test('length of posts should be incremented', cb => {
    // 1 test data
    let action = addPost('BMW')


    // 2 action
    let newState = profileReducer(state,action)

    // 3 expectation
    expect(newState.posts.length).toBe(5)
})

test('message of new post should be BMW', cb => {
    // 1 test data
    let action = addPost('BMW')


    // 2 action
    let newState = profileReducer(state,action)

    // 3 expectation
    expect(newState.posts[4].message).toBe('BMW')
})

test('after deleting length of messages should be decrement', cb => {
    // 1 test data
    let action = deletePost(1)


    // 2 action
    let newState = profileReducer(state,action)

    // 3 expectation
    expect(newState.posts.length).toBe(3)
})

