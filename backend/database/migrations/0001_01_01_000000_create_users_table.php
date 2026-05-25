<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            
            // Kolom tambahan khusus untuk fitur CAREERMATCH Kelompok ROBLOX
            $table->string('phone')->nullable();       // Untuk simpan nomor telepon (Security Suite)
            $table->string('avatar')->nullable();      // Untuk simulasi unggah foto profil
            $table->string('mbti_type')->nullable();   // Untuk menyimpan hasil akhir tes MBTI (misal: ENFJ)
            
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};