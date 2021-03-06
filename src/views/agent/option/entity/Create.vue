<template>
  <el-main>
    <el-col :offset="4" :span="12">
      <el-form :model="entity" ref="entity" label-width="200px" :rules="rules">
        <el-form-item :label="$t('entity.name')" prop="name">
          <el-input v-model="entity.name" :placeholder="$t('entity.name')"></el-input>
        </el-form-item>
        <el-form-item :label="$t('entity.upload.name')">
          <el-upload
            ref="upload"
            :on-change="upload"
            :auto-upload="false"
            drag
            action="#"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">{{ $t("entity.upload.start") }}<em>{{ $t("entity.upload.mid") }}</em>{{ $t("entity.upload.end") }}</div>
            <div slot="tip" class="el-upload__tip">{{ $t("entity.upload.tip") }}</div>
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('entity.content')">
          <el-table :data="showContents">
            <el-table-column label="#" prop="index" width="80px"></el-table-column>
            <el-table-column :label="$t('entity.value')" prop="value"></el-table-column>
            <el-table-column width="80px">
              <template slot-scope="scope">
                <el-button type="danger" icon="el-icon-close" circle @click="remove(scope.row)"></el-button>
              </template>
        </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item>
          <el-pagination
            @current-change="loadShowContents"
            :current-page.sync="id"
            :page-size="perPage"
            layout="total, prev, pager, next, jumper"
            :total="entity.contents.length">
          </el-pagination>
        </el-form-item>
        <el-form-item :label="$t('entity.addContent')">
          <el-input :placeholder="$t('entity.value')" v-model="value">
            <el-button slot="append" icon="el-icon-circle-plus-outline" @click="append"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">{{ $t("common.create") }}</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-main>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("entity");

export default {
  name: "Create",
  data: function() {
    return {
      perPage: 10,
      value: "",
      id: 1,
      showContents: [],
      fileList: [],
      entity: {
        contents: []
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please enter entity name",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["create"]),
    submitForm() {
      this.$refs.entity.validate(valid => {
        if (valid) {
          this.create({
            agentId: this.$route.params.agentId,
            data: this.entity
          }).then(() => {
            this.$router.push({
              name: "optionEntityIndex",
              params: {
                agentId: this.$route.params.agentId
              }
            });
          });
        } else {
          return false;
        }
      });
    },
    loadShowContents() {
      const adjustId = () => {
        let maxId = this.entity.contents.length / this.perPage;
        if (this.entity.contents.length % this.perPage !== 0) {
          maxId += 1;
        }
        if (this.id > maxId) {
          this.id = maxId;
        }
      };
      adjustId();
      const page = this.id - 1;
      const start = page * this.perPage;
      const end = Math.min(
        (page + 1) * this.perPage,
        this.entity.contents.length
      );
      this.showContents = [];
      this.entity.contents.slice(start, end).forEach((value, index) => {
        this.showContents.push({
          index: page * this.perPage + index + 1,
          value
        });
      });
    },
    append() {
      if (this.value !== "") {
        this.entity.contents.push(this.value);
        this.value = "";
        this.loadShowContents();
      }
    },
    remove(row) {
      const index = this.entity.contents.indexOf(row.value);
      this.entity.contents.splice(index, 1);
      this.loadShowContents();
    },
    upload: function(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.$confirm(
          `This operation will append "${
            file.name
          }" to the content list, continue?`,
          "Tips",
          {
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
            type: "warning"
          }
        )
          .then(() => {
            const data = e.target.result.split(/[\r?\n]/);
            data.forEach(value => {
              value = value.trim();
              if (value !== "") {
                this.entity.contents.push(value);
              }
            });
            this.$message({
              type: "success",
              message: "Appended"
            });
            this.loadShowContents();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "Canceled"
            });
            this.loadShowContents();
          });
      };
      reader.readAsText(file.raw);
      this.$refs.upload.clearFiles();
    }
  }
};
</script>

<style lang="stylus">
.el-select
  width 100%
</style>
