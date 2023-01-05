<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommmentRequest;
use App\Http\Resources\CommentResourse;
use App\Http\Resources\FilterCommentResourse;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return CommentResourse::collection(Comment::paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return CommentResourse
     */
    public function store(CommmentRequest $request)
    {
        $comment = Comment::create($request->validated());

        return new CommentResourse($comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return CommentResourse
     */
    public function show($id)
    {
        return new CommentResourse(Comment::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return CommentResourse
     */
    public function update(CommmentRequest $request, $id)
    {
        Comment::find($id)->update($request->validated());

        return new CommentResourse(Comment::find($id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return CommentResourse
     */
    public function destroy($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
        return new CommentResourse($comment);
    }

    public function filter(Request $request)
    {
        $validated = $request->validate([
            'by'=>'required',
            'value'=>'required',
            'paginate'=>'required|integer'
        ]);

        if ($validated['by'] == 'all'){
            $users = Comment::where('id', "LIKE", "%{$validated['value']}%")
                ->orWhere('user_id', "LIKE", "%{$validated['value']}%")
                ->orWhere('point_of_interest_id', "LIKE", "%{$validated['value']}%")
                ->orWhere('text', "LIKE", "%{$validated['value']}%")
                ->paginate($validated['paginate']);
        } else {
            $users = Comment::where($validated['by'], "LIKE", "%{$validated['value']}%")->paginate($validated['paginate']);
        }

        return FilterCommentResourse::collection($users);
    }
}