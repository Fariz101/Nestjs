import { Injectable } from '@nestjs/common';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';
import { Siswa } from './entities/siswa.entity';

@Injectable()
export class SiswaService {
  private siswa: Siswa[] = [];

  create(createSiswaDto: CreateSiswaDto) {
    this.siswa.push(createSiswaDto);
    return 'Siswa berhasil ditambahkan';
  }

  findAll(): Siswa[] {
    return this.siswa;
  }

  findOne(nisn: string) {
    return this.siswa.find((siswa) => siswa.nisn === nisn);
  }

  update(nisn: string, updateSiswaDto: UpdateSiswaDto) {
    const i = this.siswa.findIndex((siswa) => siswa.nisn === nisn);
    if (updateSiswaDto.nama !== undefined) {
      this.siswa[i].nama = updateSiswaDto.nama;
    }
    if (updateSiswaDto.alamat !== undefined) {
      this.siswa[i].alamat = updateSiswaDto.alamat;
    }
    if (updateSiswaDto.umur !== undefined) {
      this.siswa[i].umur = updateSiswaDto.umur;
    }
    return 'Data siswa berhasil diupdate';
  }

  remove(nisn: string) {
    const i = this.siswa.findIndex((siswa) => siswa.nisn === nisn);
    this.siswa.splice(i, 1);
    return 'Data siswa berhasil dihapus';
  }
}
