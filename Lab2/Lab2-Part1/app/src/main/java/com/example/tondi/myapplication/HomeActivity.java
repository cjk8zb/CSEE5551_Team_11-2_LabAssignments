package com.example.tondi.myapplication;

import android.Manifest;
import android.app.ProgressDialog;
import android.app.VoiceInteractor;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.provider.MediaStore;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.ArrayMap;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;
import com.google.firebase.storage.StorageTask;
import com.google.firebase.storage.UploadTask;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.util.ArrayList;
import java.util.Map;

public class HomeActivity extends AppCompatActivity {

    private static final int PERMISSION_CODE = 1000;
    private static final int IMAGE_CAPTURE_CODE = 1001;
    private Button CaptureImage;
    private Button AnalyzeImage;
    private Button btnUpload;
    private ImageView image_view;
    private Uri image_uri;
    private Uri image_url;
    private EditText imageName;
    private ProgressDialog mProgressDialog;
    private Uri downloadUri;

    private StorageReference mStorageRef;
    private FirebaseAuth auth;

    private ArrayList<String> pathArray;
    private int array_position;

    FirebaseStorage storage = FirebaseStorage.getInstance();

    public void UploadActivity(){

    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        CaptureImage = findViewById(R.id.CaptureImage);
        AnalyzeImage = findViewById(R.id.AnalyzeImage);
        btnUpload = findViewById(R.id.btnUpload);
        image_view = findViewById(R.id.image_view);
        imageName = findViewById(R.id.ImageName);
        //mProgressDialog = new ProgressDialog(UploadActivity.this);
        auth = FirebaseAuth.getInstance();



        CaptureImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                    if(checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_DENIED ||
                            checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_DENIED){
                        String[] permission = {Manifest.permission.CAMERA, Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.READ_EXTERNAL_STORAGE};
                        requestPermissions(permission, PERMISSION_CODE);
                    }
                    else{
                        openCamera();
                    }

                }
            });
        AnalyzeImage.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                String URL = "https://api.kairos.com/v2/media?source=";
                JSONObject auth = new JSONObject();
                try {
                    auth.put("app_id", "383834d4");
                    auth.put("app_key", "80c05ccc0e6190befa56727e3abaae86");
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                Log.e("auth object", auth.toString());

                if(image_url == null){
                    return;

                }
                else{
                    RequestQueue requestQueue =  Volley.newRequestQueue(HomeActivity.this.getApplicationContext());;
                    JsonObjectRequest objectRequest = new JsonObjectRequest(
                            Request.Method.POST, URL + downloadUri, auth,
                            new Response.Listener<JSONObject>() {


                        @Override
                        public void onResponse(JSONObject response) {
                            Log.e("It worked!", response.toString());
                            //try {
                            //    HandleResponse(response);
                            //} catch (JSONException e) {
                            //    e.printStackTrace();
                            //}
                        }
                    },
                        new Response.ErrorListener(){
                            @Override
                            public void onErrorResponse(VolleyError error) {
                                Log.e("It didnt work!", error.toString());
                            }
                        }

                            ) {
                        @Override
                        public Map<String, String> getHeaders() throws AuthFailureError {
                            Map<String, String> params = new ArrayMap<>();
                            params.put("app_id", "383834d4");
                            params.put("app_key", "80c05ccc0e6190befa56727e3abaae86");
                            return params;
                        }
                    };
                    requestQueue.add(objectRequest);
                }

            }
        });
        btnUpload.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(), "Uploading", Toast.LENGTH_SHORT).show();
                Log.e("storage variable",image_url.toString() );

                FirebaseUser user = auth.getCurrentUser();
                String userID = user.getUid();

                String name = imageName.getText().toString();
                if(checkSelfPermission(Manifest.permission.CAMERA) == PackageManager.PERMISSION_DENIED ||
                        checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_DENIED){
                    String[] permission = {Manifest.permission.CAMERA, Manifest.permission.WRITE_EXTERNAL_STORAGE, Manifest.permission.READ_EXTERNAL_STORAGE};
                    requestPermissions(permission, PERMISSION_CODE);
                }
                else{
                    if(!name.equals("")){
                        StorageReference mStorageRef = storage.getReference();
                        final StorageReference storageReference = mStorageRef.child(name + ".jpg");
                        storageReference.putFile(image_url).addOnSuccessListener(new OnSuccessListener<UploadTask.TaskSnapshot>() {
                            @Override
                            public void onSuccess(UploadTask.TaskSnapshot taskSnapshot) {
                                storageReference.getDownloadUrl().addOnSuccessListener(new OnSuccessListener<Uri>() {
                                    @Override
                                    public void onSuccess(Uri uri) {
                                        downloadUri = uri;
                                        Toast.makeText(getApplicationContext(), "Upload Complete!", Toast.LENGTH_SHORT).show();
                                    }
                                });
                            }
                            }
                            ).addOnFailureListener(new OnFailureListener() {
                            @Override
                            public void onFailure(@NonNull Exception e) {
                                Toast.makeText(getApplicationContext(), "Upload Failed!", Toast.LENGTH_SHORT).show();
                            }
                        });
                    }
                }
            }
        });
        }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        switch(requestCode){
            case PERMISSION_CODE:{
                if (grantResults.length > 0 && grantResults[0] ==  PackageManager.PERMISSION_GRANTED){
                    openCamera();
                }
                else{
                    Toast.makeText(this, "Permission Denied...", Toast.LENGTH_SHORT).show();
                }
            }
        }
    }

    //private void HandleResponse(JSONArray response) throws JSONException {
        //if(response.getJSONObject(Integer.parseInt("frames")).getString("people") == null){
          //  Toast.makeText(this, response.getJSONObject(Integer.parseInt("frames")).getJSONObject("people").getString("emotions"), Toast.LENGTH_SHORT).show();

        //}
        //else{
           // String anger = response.getJSONObject(Integer.parseInt("frames")).getJSONObject("people").getJSONObject("emotions").getString("anger");
            //String disgust =response.getJSONObject(Integer.parseInt("frames")).getJSONObject("people").getJSONObject("emotions").getString("disgust");
           // String fear = response.getJSONObject("frames").getJSONObject("people").getJSONObject("emotions").getString("fear");
            //String joy = response.getJSONObject("frames").getJSONObject("people").getJSONObject("emotions").getString("joy");
            //String sadness = response.getJSONObject("frames").getJSONObject("people").getJSONObject("emotions").getString("sadness");
            //String surprise = response.getJSONObject("frames").getJSONObject("people").getJSONObject("emotions").getString("surprise");
            //Toast.makeText(this, response.getJSONObject("frames").getJSONObject("emotions").getString("people"), Toast.LENGTH_SHORT).show();
        //}
   // }

    private void openCamera() {
        ContentValues values = new ContentValues();
        values.put(MediaStore.Images.Media.TITLE, "New Picture");
        values.put(MediaStore.Images.Media.DESCRIPTION, "From the Camera");
        image_uri = getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);

        Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        cameraIntent.putExtra(MediaStore.EXTRA_OUTPUT, image_uri);
        startActivityForResult(cameraIntent, IMAGE_CAPTURE_CODE);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        if (resultCode == RESULT_OK){
            image_view.setImageURI(image_uri);
            image_url = image_uri;

        }

    }
}

