package com.example.tondi.myapplication;

import android.app.ProgressDialog;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private EditText Name;
    private EditText Password;
    private Button Login;
    private Button SignUp;
    private FirebaseDatabase FirebaseDatabase = com.google.firebase.database.FirebaseDatabase.getInstance();
    private DatabaseReference RootReference = FirebaseDatabase.getReference();
    private DatabaseReference ChildReference = RootReference.child("message");
    private ProgressDialog ProgressDialog;
    private FirebaseAuth firebaseAuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Name = (EditText)findViewById(R.id.username);
        Password = (EditText)findViewById(R.id.password);
        Login = (Button)findViewById(R.id.ButtonLogin);
        SignUp = (Button)findViewById(R.id.ButtonSignup);
        Login.setOnClickListener(this);
        SignUp.setOnClickListener(this);
        ProgressDialog = new ProgressDialog(this);
        ProgressDialog = new ProgressDialog(this);
        firebaseAuth = FirebaseAuth.getInstance();
    }
    private void registerUser(){
        String email = Name.getText().toString().trim();
        String password = Password.getText().toString().trim();
        if(TextUtils.isEmpty(email)){
            Toast.makeText(this, "Please enter email", Toast.LENGTH_SHORT).show();
            return;
        }
        if(TextUtils.isEmpty(password)){
            Toast.makeText(this, "Please enter password", Toast.LENGTH_SHORT).show();
            return;
        }
        ProgressDialog.setMessage("Registering User!");
        ProgressDialog.show();

        firebaseAuth.createUserWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if(task.isSuccessful()){
                            ProgressDialog.dismiss();
                            Toast.makeText(MainActivity.this, "Registerd Successfully", Toast.LENGTH_SHORT).show();

                        }
                        else{
                                ProgressDialog.dismiss();
                                FirebaseAuthException e = (FirebaseAuthException )task.getException();
                                Toast.makeText(MainActivity.this, "Please try again, failed Registration due to: "+e.getMessage(), Toast.LENGTH_SHORT).show();
                                return;
                        }
                    }
                });
    }
    private void userLogin(){
        String email = Name.getText().toString().trim();
        String password = Password.getText().toString().trim();
        if(TextUtils.isEmpty(email)){
            Toast.makeText(this, "Please enter email", Toast.LENGTH_SHORT).show();
            return;
        }
        if(TextUtils.isEmpty(password)){
            Toast.makeText(this, "Please enter password", Toast.LENGTH_SHORT).show();
            return;
    }
        ProgressDialog.setMessage("Logging in User!");
        ProgressDialog.show();

        firebaseAuth.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        ProgressDialog.dismiss();
                        if(task.isSuccessful()){
                            finish();
                            startActivity(new Intent(getApplicationContext(), HomeActivity.class));
                        }
                        else{
                            ProgressDialog.dismiss();
                            FirebaseAuthException e = (FirebaseAuthException )task.getException();
                            Toast.makeText(MainActivity.this, "Please try again, failed Login due to: "+e.getMessage(), Toast.LENGTH_SHORT).show();
                            return;
                        }
                    }
                });
    }
    @Override
    public void onClick(View v) {
        if(v == SignUp){
            registerUser();
        }
        if(v == Login){
            userLogin();
        }

    }
}
