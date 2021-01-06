package lt.verbus.backend.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import lt.verbus.backend.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
@Api(tags = "This controller is responsible for product interactions")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    private List<String> getAllProducts() {
        return List.of("Produktas1", "Produktas2");
    }

    @PostMapping("/{name}")
    private String addProduct(@PathVariable @ApiParam("Produkto pavadinimas") String name) {
        return name;
    }


}
