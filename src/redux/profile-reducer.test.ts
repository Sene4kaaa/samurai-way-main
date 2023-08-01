import {addPostActionCreator, PostType, profileReducer, ProfileType} from "./profile-reducer";

test('length of posts should be incremented', cb => {
    // 1 test data
    let action = addPostActionCreator('BMW')
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

    // 2 action
    let newState = profileReducer(state,action)

    // 3 expectation
    expect(newState.posts.length).toBe(5)
})