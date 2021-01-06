package lt.verbus.backend.controller;

import lt.verbus.backend.service.FileService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/file")
public class FileController {

    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping
    private List<String> getAllFiles(){return List.of("failas", "failas2");}

    @PostMapping
    private String uploadFile(@RequestParam("document") MultipartFile file) {
        return fileService.uploadFile(file);
    }

    @PutMapping("/{name2}")
    private String updateFile(@PathVariable String name2) {
        return name2;
    }


}
