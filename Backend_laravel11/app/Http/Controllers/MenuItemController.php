<?php

namespace App\Http\Controllers;

use App\Models\MenuCategory;
use App\Models\MenuItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MenuItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menuItems = MenuItem::with('menu_category')->get();
        
        return response()->json([
            "message" => "đã tạo sản phẩm thành công",
            "data" => $menuItems,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $file = $request->file('img');

        $category = MenuCategory::where('CategoryID',$request->CategoryID)->first();
            $file = $request->file('img');

            $extension = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
            $file_name = time() . '-' . $request->Name .'.'. $extension;
            $filterFile_name = $category->CategoryName.'/'.$file_name;

            $file->move(public_path('uploads/Categories/'.$category->CategoryName),$filterFile_name);
            
            $request->merge(['ImageURL'=> $filterFile_name]);

        $menuItem = MenuItem::create($request->all());
        
        return response()->json([
            "message" => "đã tạo sản phẩm thành công",
            "data"=> $menuItem,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(MenuItem $menuItem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MenuItem $menuItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuItem $menuItem)
    {
        $category = MenuCategory::where('CategoryID',$request->CategoryID)->first();

        if($request->has('img')){
        $file = $request->file('img');

         //xóa bỏ ảnh cũ
        $filePath = public_path('uploads\\Categories\\'.$category->CategoryName.'\\'.$menuItem->ImageURL);
        if (file_exists($filePath)) {
            unlink($filePath);
            // Thông báo thành công
        }
        
        // lưu ảnh mới
        $extension = pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
        $file_name = time() . '-' . $request->Name .'.'. $extension;
        $filterFile_name = preg_replace('/[^A-Za-z0-9\-_.]/', '_', $file_name);

        $file->move(public_path('uploads/Categories/'.$category->CategoryName),$filterFile_name);
            
        $request->merge(['ImageURL'=> $filterFile_name]);

        $menuItem = $menuItem->update($request->all());
        
        }else{
            $menuItem->update($request->all());
        }

        return response()->json([
            "message" => "đã update sản phẩm thành công",
            "data"=> $menuItem,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuItem $menuItem)
    {
        $category = MenuCategory::where('CategoryID',$menuItem->CategoryID)->first();

        $filePath = public_path('uploads\\Categories\\'.$category->CategoryName.'\\'.$menuItem->ImageURL);
        if (file_exists($filePath)) {
            unlink($filePath);
            // Thông báo thành công
        }

        $menuItem->delete();

        return response()->json([
            "message" => "đã xóa sản phẩm thành công"
        ]);
    }
}
